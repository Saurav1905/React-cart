import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

class Main extends Component {
  state = {
    courses: [
      {
        id: 1,
        title: "React",
        description:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        price: 40,
      },
      {
        id: 2,
        title: "Angular",
        description:
          "Angular makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        price: 30,
      },
      {
        id: 3,
        title: "Python",
        description:
          "Python makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        price: 30,
      },
    ],
    save: [],
  };
  handleDelete = (id) => {
    let courses = [...this.state.courses];
    const course = courses.filter((m) => m.id === id);
    courses = courses.filter((m) => m.id !== id);
    this.setState({ courses });
    this.props.setTotal(this.props.total - course[0].price);
  };
  handleDeleteSave = (id) => {
    let save = [...this.state.save];
    save = save.filter((m) => m.id !== id);
    this.setState({ save });
  };
  handleTotal = () => {
    let total = 0;
    this.state.courses.map((m) => {
      total += m.price;
    });
    this.props.setTotal(total);
  };
  componentDidMount() {
    this.handleTotal();
  }

  handleTransfer = (id) => {
    let courses = [...this.state.courses];
    courses = courses.filter((m) => m.id !== id);
    this.setState({ courses });
  };

  handleSave = (id) => {
    const course = this.state.courses.filter((m) => m.id === id)[0];
    const save = [...this.state.save, course];
    this.setState({ save });
    this.handleTransfer(id);
    this.handleSavePrice(id);
  };

  handleSavePrice = (id) => {
    let courses = [...this.state.courses];
    const course = courses.filter((m) => m.id === id);
    courses = courses.filter((m) => m.id !== id);
    this.props.setTotal(this.props.total - course[0].price);
  };

  handleAdd = (id) => {
    const course = this.state.save.filter((m) => m.id === id);
    const save = this.state.save.filter((m) => m.id !== id);
    const courses = [...this.state.courses, course[0]];
    console.log(course[0]);
    this.setState({
      courses,
      save,
    });
    this.props.setTotal(this.props.total + course[0].price);
  };

  rendercourse() {
    if (this.state.courses.length === 0)
      return <div className="empty-cart"></div>;

    return (
      <Grid container spacing={3}>
        {" "}
        {this.state.courses.map((m) => (
          <React.Fragment key={m.id} className="card">
            <div className="card">
              <Grid item xs={2} className="course-img"></Grid>
              <Grid item xs={7} className="content">
                <h2>{m.title}</h2>
                <p>{m.description}</p>
              </Grid>
              <Grid item xs={2} className="price">
                <p>${m.price}</p>
                <Button
                  onClick={() => this.handleSave(m.id)}
                  className="save-btn"
                >
                  Save For later
                </Button>
              </Grid>
              <Grid item xs={1} className="price">
                <CloseIcon
                  onClick={() => this.handleDelete(m.id)}
                  className="remove"
                />
              </Grid>
            </div>
          </React.Fragment>
        ))}
      </Grid>
    );
  }
  rendersave() {
    if (this.state.save.length === 0) return;
    return (
      <Grid container spacing={3}>
        <h2 style={{ paddingLeft: 3 }}> Saved For Later</h2>{" "}
        {this.state.save.map((m) => (
          <React.Fragment key={m.id} className="card">
            <div className="card">
              <Grid item xs={2} className="course-img"></Grid>
              <Grid item xs={7} className="content">
                <h2>{m.title}</h2>
                <p>{m.description}</p>
              </Grid>
              <Grid item xs={2} className="price">
                <p>${m.price}</p>
                <Button
                  onClick={() => this.handleAdd(m.id)}
                  className="save-btn"
                >
                  Add to Cart
                </Button>
              </Grid>
              <Grid item xs={1} className="price">
                <CloseIcon
                  onClick={() => this.handleDeleteSave(m.id)}
                  className="remove"
                />
              </Grid>
            </div>
          </React.Fragment>
        ))}
      </Grid>
    );
  }
  render() {
    return (
      <>
        <Container className="container">
          <Avatar className="cart-icon">
            <ShoppingCartIcon style={{ fontSize: "8vh" }} />
          </Avatar>
          <Container className="cart-course"> {this.rendercourse()}</Container>
          <Container className="savefor"> {this.rendersave()}</Container>
        </Container>
      </>
    );
  }
}

export default Main;
