import React, {Component} from "react"

class Menu extends Component {
    state = {
        show: true
    }

    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Menu </button>
                <nav style={{display: this.state.show ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        )
    }
}

export default Menu
