import {Image, Badge, Card} from 'react-bootstrap';
import FilterButtons from './FilterButtons';
import '../Card.css';
function CardJob({item, addFilter}) {
  return (
    <div className={`card d-md-flex flex-md-row ${item.featured ? 'featured' : ''} `}>
      <Image className="card-logo me-4" alt="logo" src={item.logo}></Image>
      <Card.Body className="card-body p-0 d-flex flex-column justify-content-between">
        <Card.Subtitle className="mb-2 d-flex gap-2 text-primary">
          {item.company}
          {item.new && (
            <Badge pill bg="primary">
              NEW!
            </Badge>
          )}
          {item.featured && (
            <Badge pill bg="secondary">
              FEATURED
            </Badge>
          )}
        </Card.Subtitle>
        <Card.Title className="pb-2">{item.position}</Card.Title>
        <Card.Text className="text-secondary">
          {item.postedAt} &nbsp; &#9679; &nbsp; {item.contract} &nbsp; &#9679; &nbsp; {item.location}
        </Card.Text>
        <hr className="my-0 d-md-none"></hr>
      </Card.Body>
      <FilterButtons
        item={item}
        role={item.role}
        level={item.level}
        languages={item.languages}
        tools={item.tools}
        addFilter={addFilter}
      ></FilterButtons>
    </div>
  );
}
export default CardJob;
