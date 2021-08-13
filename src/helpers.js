import uniqid from 'uniqid';

const helpers = {
  onDelete(id) {
    this.setState((prevState) => {
      prevState.blocks.splice(
        prevState.blocks.findIndex((block) => block.id === id),
        1
      );
      return { blocks: [...prevState.blocks] };
    });
  },
  onAdd() {
    this.setState((prevState) => {
      const section = {};
      section.id = uniqid();
      prevState.blocks.push(section);
      return { blocks: [...prevState.blocks] };
    });
  },
};

export default helpers;
