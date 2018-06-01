import React, {Component} from 'react';

const emptyStar = '/img/star_empty.png';
const fullStar = '/img/star_full.png';

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled : Array.apply(null, Array(5)).map((item, cnt) => false)
        };
    }

    componentDidMount() {
        const rating = localStorage.getItem(`rating-${this.props.playerId}`);
        if (rating) {
            this.setState({enabled : JSON.parse(rating)});
        }
    }

    handleClick(cnt) {
        let arr = this.state.enabled.slice();
        for (let i=0; i<arr.length; i++) {
            arr[i] = i <= cnt;
        }

        this.setState(
            {enabled : arr},
            () => localStorage.setItem(`rating-${this.props.playerId}`, JSON.stringify(this.state.enabled))
        );
    }

    handleHover(cnt) {
        this.handleHoverOut();
        let enabled = this.state.enabled.slice();

        for (let i=0; i<enabled.length; i++) {
            enabled[i] = i <= cnt;
        }

        this.setState({enabled});
    }

    handleHoverOut() {
        this.setState({
            enabled  : JSON.parse(localStorage.getItem(`rating-${this.props.playerId}`))
        });
    }

    render() {
        return(
            <div className="star-rating">
                {
                    this.state.enabled.map((item, cnt) => {
                        return (
                            <div className="star-rating-star-wrapper" key={cnt}>
                                <Star enabled={item}
                                      onClick={() => this.handleClick(cnt)}
                                      onHover={() => this.handleHover(cnt)}
                                      onHoverOut={() => this.handleHoverOut()} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const Star = ({enabled, onClick, onHover, onHoverOut}) =>
    enabled ?
    <img src={fullStar} className="star-rating-star full" onClick={onClick} onMouseEnter={onHover} onMouseLeave={onHoverOut} /> :
    <img src={emptyStar} className="star-rating-star empty" onClick={onClick} onMouseEnter={onHover} onMouseLeave={onHoverOut} />
;

export default StarRating;