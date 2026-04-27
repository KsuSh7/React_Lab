import React from "react";
import { connect } from "react-redux";
import type { RootState } from "../store";
import type { Book } from "../types/Book";
import ItemCard from "../components/ItemCard";
import styles from "../styles/Items.module.css";

interface Props {
  items: Book[];
}

interface State {
  search: string;
}

class ClassItems extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("RENDER ClassItem Constructor");
    this.state = {
      search: "",
    };
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log("RENDER ClassItems");
    const { items } = this.props;
    const { search } = this.state;

    const filtered = items.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <h2>Books (Class Component)</h2>

        <input
          placeholder="Search..."
          value={search}
          onChange={this.handleSearch}
        />

        <ul className={styles.list}>
          {filtered.map((book) => (
            <ItemCard key={book.id} book={book} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  items: state.items.items,
});

export default connect(mapStateToProps)(ClassItems);
