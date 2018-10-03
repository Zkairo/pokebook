import React from 'react'
import {PropTypes} from 'prop-types'

export const PokeHome = ({name, password}) => {

	let _email, _pass

	const submit = (e) => {
		e.preventDefault()
		console.log('name', _email.value)
		console.log('password', _pass.value)
	}

	return (
		<div className="canvas">
			<div className="top-bar">
				<div className="poketitle">
				 	<h1>pokebook</h1>
				</div>
				<div className="the-table">
					<form onSubmit={submit} className="add-user-form">
						<table cellspacing="0" role="presentation">
							<tbody>
								<tr>
									<td class="html7magic">
										<label for="email">Email or Phone</label>
									</td>
									<td class="html7magic">
										<label for="pass">Password</label>
									</td>
								</tr>
								<tr>
									<td>
										<input type="email" class="inputtext" id="email" tabindex="1" data-testid="royal_email" ref={input => _email = input}/>
									</td>
									<td>
										<input type="password" class="inputtext" id="pass" tabindex="2" data-testid="royal_pass" ref={input => _pass = input}/>
									</td>
									<td>
										<button> Log in </button>
									</td>
								</tr>
								<tr>
									<td class="login_form_label_field">
									</td>
									<td class="login_form_label_field">
										<div>
											<label> Forgot account? </label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
			<div className="lower-body">
				<div className="right-side">
				</div>
				<div className="left-side">
				</div>
			</div>
		</div>
	)
}

PokeHome.propTypes = {
	name: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired
}

/*export class  AddDayForm extends Component {

  constructor(props){
      super(props)
      this.submit = this.submit.bind(this)
  }


    submit(e) {
        e.preventDefault()
        console.log('resort', this.refs.resort.value)
        console.log('date', this.refs.date.value)
        console.log('powder', this.refs.powder.checked)
        console.log('date', this.refs.backcountry.checked)
    }

    render() {

      const { resort, date, powder, backcountry } = this.props

      return (
          <form onSubmit={this.submit} className="add-day-form">
              <label htmlFor="resort"> Resort Name </label>
              <input id="resort" type="text" required defaultValue={resort} ref="resort"/>

              <label htmlFor="date"> Date </label>
              <input id="date" type="date" required defaultValue={date} ref="date"/>

              <div>
                <input id="powder" type="checkbox" defaultChecked={powder} ref="powder"/>
                <label htmlFor="powder"> Powder Day </label>
              </div>
              <div>
                <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref="backcountry"/>
                <label htmlFor="backcountry"> Backcountry Day </label>
              </div>
              <button>Add Day</button>
          </form>
      )
    }
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2018-02-12",
  powder: true,
  backcountry: false
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired

}
*/
