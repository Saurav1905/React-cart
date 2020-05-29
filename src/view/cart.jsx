import React, { Component } from "react";
import Nav from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";
import Checkout from "../components/total";
import Grid from "@material-ui/core/Grid";
class Cart extends Component {
  state = {
    total: 0,
  };
  render() {
    return (
      <React.Fragment>
        <Nav />

        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Main
              total={this.state.total}
              setTotal={(total) => this.setState({ total: total })}
            />
          </Grid>
          <Grid container className="lower-container" item xs={2}>
            <Checkout total={this.state.total} />
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Cart;
