import Accordion from 'react-bootstrap/Accordion';
import Card from '../Card';
import './List.css';

function List({data}) {
    return (
        <Accordion>
            {data.map((element) => 
                <Accordion.Item key={element.id} eventKey={element.id}>
                    <Accordion.Header>{element.name}</Accordion.Header>
                    <Accordion.Body><Card body={element.info}/></Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    );
}

export default List;