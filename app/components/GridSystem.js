var React = require('react');

const GridSystem = React.createClass({
	render: function(){
		return(
			<div>
      <h1>Grid System</h1>
<div className='fill-blue dark clearfix space-bottom'>
  <div className='col-sm-1 pad0y center keyline-right'>1</div>
  <div className='col-sm-1 pad0y center keyline-right'>2</div>
  <div className='col-sm-1 pad0y center keyline-right'>3</div>
  <div className='col-sm-1 pad0y center keyline-right'>4</div>
  <div className='col-sm-1 pad0y center keyline-right'>5</div>
  <div className='col-sm-1 pad0y center keyline-right'>6</div>
  <div className='col-sm-1 pad0y center keyline-right'>7</div>
  <div className='col-sm-1 pad0y center keyline-right'>8</div>
  <div className='col-sm-1 pad0y center keyline-right'>9</div>
  <div className='col-sm-1 pad0y center keyline-right'>10</div>
  <div className='col-sm-1 pad0y center keyline-right'>11</div>
  <div className='col-sm-1 pad0y center'>12</div>
</div>
<div className='fill-blue dark clearfix space-bottom'>
  <div className='col-sm-8 pad0y center keyline-right'>8</div>
  <div className='col-sm-4 pad0y center'>4</div>
</div>
<div className='fill-blue dark clearfix space-bottom'>
  <div className='col-sm-4 pad0y center keyline-right'>4</div>
  <div className='col-sm-4 pad0y center keyline-right'>4</div>
  <div className='col-sm-4 pad0y center'>4</div>
</div>
<div className='fill-blue dark clearfix space-bottom'>
  <div className='col-sm-6 pad0y center keyline-right'>6</div>
  <div className='col-sm-6 pad0y center'>6</div>
</div>
</div>
)
	}
});
module.exports = GridSystem;
