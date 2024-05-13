import Accordion from 'react-bootstrap/Accordion';
import Card from '../Card';
import './List.css';

function List({data}) {
    return (
        <Accordion>
            {Object.keys(data).map((element, index) => 
                <Accordion.Item key={element} eventKey={index}>
                    <Accordion.Header>{element}</Accordion.Header>
                    <Accordion.Body><Card body={data[element]}/></Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    );
}

export default List;