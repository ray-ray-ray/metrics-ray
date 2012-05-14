var chart1; // globally available
$(document).ready(function() {
	chart1 = new Highcharts.Chart({
		chart: {
		    renderTo: 'container'
		},
		title: {
		    text: 'Platform A ROI From Monthly Cohorts'
		},
		xAxis: {
		    title: {
			text: 'Days Out From Signup'
		    },
		    min: 0,
		    max: 400,
		    tickInterval: 50
		},
		yAxis: {
		    title: {
			text: '% ROI'
		    },
		    min: 0,
		    max: 600,
		    tickInterval: 100,
		    labels: {
			formatter: function() {
			    return this.value + '%';
			}
		    }
		},
		plotOptions: {
		    line: {
			pointInterval: 50
		    }
		},
		series: [{
			name: 'April',
			data: [200, 250, 300, 325, 375, 400, 450, 500]
		    }, {
			name: 'May',
			data: [100, 125, 150, 160, 180, 200, 225]
		    }]
	    });
    });