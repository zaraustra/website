import React, {PureComponent, Fragment} from "react"
import firebase from "../firebase"
import {toArray} from "lodash"
import styled from "styled-components"
import {Card, Row, Col, Button, Form} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  background: url(${({url}) => (url)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
`

const StyledCard = styled(Card)`
  padding: 15px;
  text-align: center;
  box-shadow: 0 3px 3px #CCC;
`

const RemoveIngredient = styled(FontAwesomeIcon)`
  position: absolute;
  right: 15px;
  cursor: pointer;
`

class Recipes extends PureComponent {
  state = {
    ingredients: [],
    name: "",
    image: ""
  }

  componentDidMount() {
    const db = firebase.database()
    const ingredientsRef = db.ref("ingredients")
    ingredientsRef.on("value", (snapshot) => {
      const ingredients = snapshot.val()
      const results = Object.keys(ingredients).map((id) => {
        const el = ingredients[id]
        return {
          id,
          image: el.image,
          name: el.name
        }
      })
      this.setState({
        ingredients: results
      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code)
    })
  }

  addIngredient = () => {
    const {name, image} = this.state
    if (!name || !image) return

    const ingredientsRef = firebase.database().ref("ingredients")
    const item = {name, image}
    ingredientsRef.push(item)

    this.setState({
      name: "",
      image: ""
    })
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
  }

  handleImage = (e) => {
    this.setState({image: e.target.value})
  }

  removeIngredient = (id) => {
    firebase.database().ref(`ingredients/${id}`).remove()
  }

  render() {
    const {ingredients, name, image} = this.state
    return (
      <Fragment>
        <h1>Recipes</h1>
        <p>Work in progress... 2</p>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={this.handleName} placeholder="eg. Flour..." value={name} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" onChange={this.handleImage} placeholder="eg. https://images.com/cabbage..."  value={image}  />
              </Form.Group>
              <Form.Group>
                <Button onClick={this.addIngredient} type="submit">Add farina ingredient</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr />
        <h2>Ingredients List</h2>
        <Row>
          {ingredients.map((ingredient, i) => (
            <Col md={4} key={i}>
              <StyledCard>
                <h4>{ingredient.name}</h4>
                <ImageContainer url={ingredient.image} />
                <RemoveIngredient icon={faTrash} onClick={this.removeIngredient.bind(null, ingredient.id)} />
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Fragment>
    )
  }
}
export default Recipes