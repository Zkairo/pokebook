import React, {Component} from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { PokeHome } from './PokeHome'
import  { Whoops404  } from './Whoops404'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

	render() {
		return (
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ?
			  <PokeHome /> :
			 (this.props.location.pathname === "/pokeHome") ?
			 <SkiDayCount total={this.countDays()}
							powder={this.countDays(
								 "powder"
							 )}
							backcountry={this.countDays(
								 "backcountry"
							 )}
							 goal={20} /> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm onNewDay={this.addDay}/> :
				(this.props.location.pathname === "/list-days") ?
			 	<SkiDayList days={this.state.allSkiDays}
			 				filter={this.props.match.params.filter}/> :
			 	<Whoops404 />
			}

			</div>
		)
	}
}

/*export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: "Squaw Valley",
          date: "2016-01-02",
          powder: true,
          backcountry: false
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
          ...this.state.allSkiDays,
          newDay
      ]
    })
  }

  countDays(filter){
      const { allSkiDays } = this.state
      return allSkiDays.filter( (day) => (filter) ? day[filter] : day).length
  }

  render() {
    return (
      <div className="app">
      <Menu />
      {(this.props.location.pathname === "/") ? <SkiDayCount total={this.countDays()}
                   powder={this.countDays("powder")}
                   backcountry={this.countDays("backcountry")}
                   goal={20}
      /> : (this.props.location.pathname === "/add-day") ? <AddDayForm onNewDay={this.addDays}/> :
      <SkiDayList days={this.state.allSkiDays}
                  filter={this.props.match.params.filter}
      />
    }


      </div>
    );
  }
}*/
