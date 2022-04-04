import {Button} from 'react-bootstrap';

function FilterButtons({role, level, languages, tools, addFilter}) {
  return (
    <div className="d-flex flex-wrap mt-3 gap-2 align-items-center">
      <Button onClick={() => addFilter(role)}>{role}</Button>
      <Button onClick={() => addFilter(level)}>{level}</Button>
      {languages.map((language, index) => (
        <Button onClick={() => addFilter(language)} key={language + index}>
          {language}
        </Button>
      ))}
      {tools.map((tool, index) => (
        <Button
          onClick={() => {
            addFilter(tool);
          }}
          key={tool + index}
        >
          {tool}
        </Button>
      ))}
    </div>
  );
}
export default FilterButtons;
