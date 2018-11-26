$(document).ready(function() {

var args = {
    frequency:10,                   // ( How often the object sends the values - milliseconds )
    gravityNormalized:true,         // ( If the garvity related values to be normalized )
    orientationBase:GyroNorm.GAME,      // ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
    decimalCount:1,                 // ( How many digits after the decimal point will there be in the return values )
    logger:null,                    // ( Function to be called to log messages from gyronorm.js )
    screenAdjusted:false            // ( If set to true it will return screen adjusted values. )
};



    var gn = new GyroNorm();

    gn.init(args).then(function(){
        gn.start(function(data){
            // Process:
            // data.do.alpha    ( deviceorientation event alpha value )
            // data.do.beta     ( deviceorientation event beta value )
            // data.do.gamma    ( deviceorientation event gamma value )
            // data.do.absolute ( deviceorientation event absolute value )

            // data.dm.x        ( devicemotion event acceleration x value )
            // data.dm.y        ( devicemotion event acceleration y value )
            // data.dm.z        ( devicemotion event acceleration z value )

            // data.dm.gx       ( devicemotion event accelerationIncludingGravity x value )
            // data.dm.gy       ( devicemotion event accelerationIncludingGravity y value )
            // data.dm.gz       ( devicemotion event accelerationIncludingGravity z value )

            // data.dm.alpha    ( devicemotion event rotationRate alpha value )
            // data.dm.beta     ( devicemotion event rotationRate beta value )
            // data.dm.gamma    ( devicemotion event rotationRate gamma value )
		/*	
			$('.x').text(data.dm.x);
			$('.y').text(data.dm.y);
			$('.z').text(data.dm.z);
		
			$('.gx').text(data.dm.gx);
			$('.gy').text(data.dm.gy);
			$('.gz').text(data.dm.gz);
			
			$('.a').text(data.dm.alpha);
			$('.b').text(data.dm.beta);
			$('.g').text(data.dm.gamma);
			
			$('.oa').text(data.do.alpha);
			$('.ob').text(data.do.beta);
			$('.og').text(data.do.gamma);
			$('.oabs').text(data.do.absolute);
*/



$('.hue').css('-webkit-filter', 'blur('+parseInt(Math.abs(data.do.beta)/10)+'px)');
$('.hue').css('-o-filter', 'blur('+parseInt(Math.abs(data.do.beta)/10)+'px)');
$('.hue').css('-moz-filter', 'blur('+parseInt(Math.abs(data.do.beta)/10)+'px)');
$('.hue').css('filter', 'blur('+parseInt(Math.abs(data.do.beta)/10)+'px)');			
//$('.ob').text(data.do.beta);
if(parseInt(Math.abs(data.do.beta)) > 45){
$('.text').fadeIn();
} else {
$('.text').fadeOut();
}
        });
    }).catch(function(e){
      // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
    });
});