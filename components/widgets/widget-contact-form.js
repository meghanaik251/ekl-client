function WidgetContactForm(){
    return(
		<div>
		<h5 className="heading space40"><span>Contact Form</span></h5>
		<form id="form" role="form" className="form" >
			<div className="row row1">
				<div className="col-md-5 space-bottom-20 name-container">
					<input formControlName="name" name="name" id="name" className="input-md form-control" placeholder="Name *" maxlength="200" required="" type="text"/>
					<div  class="text-danger">
						<div >
							Name is required.
						</div>
						<div >
							Name is should not contain numbers or spacial characters.
						</div>
					</div>
		
				</div>
				<div className="col-md-5 space-bottom-20 name-container" >
					<input formControlName="email" name="email" id="email" className="input-md form-control" placeholder="Email *" maxlength="200" required="" type="email"/>
					<div  className="text-danger">
						<div >
							Please enter a valid email.
						</div>
					</div>
				</div>
			</div>
			<div className="space-bottom-20">
				<input formControlName="subject" name="subject" id="subject" className="input-md form-control" placeholder="Subject" maxlength="200" required="" type="text"/>
				<div  class="text-danger">
					<div >
						Subject is required.
					</div>
					<div >
						Subject is should not contain numbers or spacial characters.
					</div>
				</div>
			</div>
			<div className="space-bottom-20">
				<textarea formControlName="message" name="message" id="message" className="input-md form-control" rows="6" placeholder="Message" required="" maxlength="400"></textarea>
				<div  class="text-danger">
					<div >
						Message is required.
					</div>
		
				</div>
			</div>
<br></br>
			<button type="submit" className="btn-black btn-black disabled" >
				Send a Message
			</button>
		</form>
		</div>
	)
}

export default WidgetContactForm;