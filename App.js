class App extends React.Component {
  state = {
    counter: 0,
    tickets: 40
  };
  /*handlerMathClick(type, number) {
    if (type === "substraction") {
      this.setState(prevState => ({
        counter: prevState.counter - 1
      }));
    } else {
      this.subState(prevState => ({
        counter: prevState.counter + 1
      }));
    }
  }*/
  //metoda odejmuje dodane wczesniej bilety podwarónkiem, że jest ich więcej niż 0
  handlerRemoveTicket = () => {
    if (this.state.counter == 0) {
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
        tickets: this.state.tickets + 1
      });
    }
  };
  //metoda dodaje bilety, aż liczba biletów będzie równa 0
  handlerAddTicket = () => {
    if (this.state.tickets == 0) {
      alert("brak biletów");
    } else {
      if (this.state.counter == 40) {
        this.setState({
          counter: this.state.counter
        });
      } else {
        this.setState({
          counter: this.state.counter + 1,
          tickets: this.state.tickets - 1
        });
      }
    }
  };
  //metoda aktualizuje liczbę dostępnych biletów i resetuje liczbę biletów które chcemy kuić
  handlerBuy = () => {
    this.setState({
      tickets: this.state.tickets,
      counter: 0
    });
  };
  render() {
    return (
      <>
        <h1>Kup bilet</h1>
        <button onClick={() => this.handlerRemoveTicket()}>-</button>
        <span> {this.state.counter} </span>
        <button onClick={() => this.handlerAddTicket()}>+</button>
        {this.state.counter > 0 && (
          <button onClick={this.handlerBuy}>Kup</button>
        )}
        <span>Liczba dostepnych biletów {this.state.tickets}</span>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
