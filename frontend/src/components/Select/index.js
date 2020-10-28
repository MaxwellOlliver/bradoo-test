import { Container } from './styles';

function Select(props) {
  return (
    <Container tabIndex={1} onBlur={() => props.showSetter(false)}>
      {props.showSelect && (
        <div className="select-modal">
          <li onClick={() => props.onSelect('name')}>name</li>
          <li onClick={() => props.onSelect('cnpj')}>cnpj</li>
          <li onClick={() => props.onSelect('city')}>city</li>
          <li onClick={() => props.onSelect('all')}>all</li>
        </div>
      )}
      <div className="find-btn" onClick={props.onShow}>
        <span>find by</span>
        <span className="fieldName">{props.selected}</span>
      </div>
    </Container>
  );
}

export default Select;
