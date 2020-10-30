import { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { debounce } from 'lodash';
import { FiSearch } from 'react-icons/fi';
import { Container, InputSearch, VendorList } from './styles';
import Select from '../Select';
import VendorItem from '../VendorItem';
import { api } from '../../services/api';
import { ProductContext } from '../../context/ProductContext';
import Loading from '../Loading';
import { ModalContext } from '../../context/ModalContext';
import loaderSvg from '../../assets/oval.svg';
import { toast } from 'react-toastify';

function VendorSection() {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedField, setSelectedField] = useState('name');
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const searchRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(false);
  const page = useRef(1);
  const ul = useRef(null);

  const { onSelectVendor, onDeselectVendor } = useContext(ProductContext);
  const { setItems, vendorsSetter, selectedVendorsSetter } = useContext(
    ModalContext
  );

  function _onSelect(field) {
    setSelectedField(field);
    setShowSelect(false);
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/vendors');

        setNext(response.data.next);
        setVendors(response.data.vendors);
        setLoading(false);
      } catch (error) {
        setNext(false);
        setVendors([]);
        setLoading(false);
        toast.error('Error on load vendors.');
      }
    })();
  }, []);

  function showModal() {
    if (showSelect) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
  }

  async function selectVendor(id) {
    if (selectedVendors.length === 0) {
      onSelectVendor(vendors.find((value) => value.id === id));
    } else {
      onDeselectVendor(true);
    }

    if (selectedVendors.includes(id)) {
      setSelectedVendors((state) => state.filter((value) => value !== id));
      if (selectedVendors.length === 2) {
        onSelectVendor(
          vendors.find(
            (value) =>
              value.id === selectedVendors.filter((value) => value !== id)[0]
          )
        );
      } else if (selectedVendors.length === 1) {
        onDeselectVendor(false);
      }
    } else {
      setSelectedVendors((state) => [...state, id]);
    }
  }

  const search = useCallback(async () => {
    try {
      const response = await api.get(
        `/vendors?q=${searchRef.current.value}&field=${selectedField}`
      );

      setSelectedVendors([]);
      setVendors(response.data.vendors);
    } catch (error) {
      toast.error('Error on search.');
    }
  }, [selectedField]);

  const pagination = useCallback(async () => {
    if (
      ul.current.scrollHeight - ul.current.clientHeight ===
      ul.current.scrollTop
    ) {
      page.current++;
      try {
        const response = await api.get(
          searchRef.current.value
            ? `/vendors?q=${searchRef.current.value}&field=${selectedField}&page=${page.current}`
            : `/vendors?page=${page.current}`
        );

        setNext(response.data.next);
        setVendors((state) => [...state, ...response.data.vendors]);
      } catch (error) {
        toast.error('Internal error.');
      }
    }
  }, [selectedField]);

  useEffect(() => (async () => await search())(), [search, selectedField]);
  useEffect(() => {
    setItems((state) => ({
      products: [...state.products],
      vendors: selectedVendors.map((value) =>
        vendors.find((vendor) => vendor.id === value)
      ),
    }));
  }, [selectedVendors, setItems, vendors]);
  useEffect(() => {
    vendorsSetter.current = setVendors;
    selectedVendorsSetter.current = setSelectedVendors;
  }, [vendorsSetter, selectedVendorsSetter]);

  const handleSearch = debounce(search, 500);
  const handleScroll = debounce(pagination, 200);

  return (
    <Container>
      <InputSearch>
        <div className="wrap">
          <FiSearch size={20} color="#333" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            ref={searchRef}
            onChange={handleSearch}
          />
        </div>
        <Select
          showSelect={showSelect}
          onShow={showModal}
          selected={selectedField}
          onSelect={_onSelect}
          showSetter={setShowSelect}
        />
      </InputSearch>
      <VendorList>
        <div className="labels">
          <span>Name</span>
          <span>CNPJ</span>
          <span>City</span>
        </div>
        <ul onScroll={handleScroll} ref={ul}>
          {loading && <Loading />}
          {!vendors[0] && <li className="no-results">Nothing here...</li>}
          {vendors.map((value) => (
            <VendorItem
              selected={selectedVendors.includes(value.id)}
              key={value.id}
              vendor={value}
              onSelect={selectVendor}
            />
          ))}
          {next && (
            <li className="loader">
              <img src={loaderSvg} alt="loader" />
            </li>
          )}
        </ul>
      </VendorList>
    </Container>
  );
}

export default VendorSection;
