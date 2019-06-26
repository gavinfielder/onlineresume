
function VI_select_option(key, text)
{
	return React.createElement('option', {value: key}, text);
}

function VI_p(text, hideWhenPrint = false)
{
	if (hideWhenPrint)
		return React.createElement('p', {className: 'variable-intro-p hide-when-print'}, text);
	return React.createElement('p', {className: 'variable-intro-p'}, text);
}

function VI_h1(text, hideWhenPrint = false)
{
	if (hideWhenPrint)
		return React.createElement('h1', {className: 'variable-intro-h1 hide-when-print'}, text);
	return React.createElement('h1', {className: 'variable-intro-h1'}, text);
}

function VI_h2(text)
{
	return React.createElement('h2', {className: 'variable-intro-h2'}, text);
}

function VI_h3(text)
{
	return React.createElement('h3', {className: 'variable-intro-h3'}, text);
}

class VariableIntroSection extends React.Component {

	// -------------------------------------------------------------------------
	//   Hardcoded data -- will be replaced by dynamic data in later updates
	// -------------------------------------------------------------------------
	
	VI_select()
	{
		return React.createElement(
			'select',
			{
				id: 'variable-intro-selector',
				onChange: this.OnVariableIntroSelect.bind(this)
			},
			VI_select_option('null', 'Select job category...'),
			VI_select_option('dev', 'Software Development'),
			VI_select_option('qa', 'Quality Assurance'),
			VI_select_option('db', 'SQL and Databases'),
			VI_select_option('it', 'IT Support'),
			VI_select_option('anal', 'Data Analysis')
		);
	}
	
	OnVariableIntroSelect(eventObject)
	{
		var value = eventObject.target.value;
		switch (value)
		{
			case 'null':
				this.changeIntro(this.vi_null);
				break;
			case 'dev':
				this.changeIntro(this.vi_dev);
				break;
			case 'qa':
				this.changeIntro(this.vi_qa);
				break;
			case 'db':
				this.changeIntro(this.vi_db);
				break;
			case 'it':
				this.changeIntro(this.vi_it);
				break;
			case 'anal':
				this.changeIntro(this.vi_anal);
				break;
		}
	}
	
	var vi_null = React.createElement('div',null,
		VI_h1('No Introduction Selected', true),
		this.VI_select(),
		VI_p('Show information about my interest in a particular job category by selecting an item from the dropdown menu.', true)
	);
	
	var vi_dev = React.createElement('div',null,
		VI_h1('Software Development'),
		this.VI_select(),
		VI_p('As a software developer I am a combination of self-taught, formal education, and unconventional education. I have been programming since I was 16; my first language was VB6 and my second was C++, and I am someone who has always had side projects in one thing or another.'),
		VI_h3('Formal Education related to Software Development'),
		VI_p('My minor in Computer Science included training in SDLC, design principles, patterns and anti-patterns, TDD, and agile methodology. Within my university, I took part in one agile development team for a potential startup and two independent research projects.'),
		VI_h3('Unconventional Education in Software Development'),
	
	
		VI_p(
			React.createElement('span', null,
				React.createElement('span', null, 'I am a 42 cadet. 42 is Paris-based nonprofit and I studied at its Silicon Valley campus. 42 is best described as an open coding lab where you pick your own projects, solve your own problems (sometimes individually, sometimes in teams), and all work is peer-reviewed. Most of my recent projects listed on this website were developed at 42. You may read more about 42 at '),
				React.createElement('a', {href: 'https://www.42.us.org/program/the-42-program/'}, 'www.42.us.org'),
				React.createElement('span', null, '.')
			)
		)
	);
	
	var vi_qa = React.createElement('div', null,
		VI_h1('Quality Assurance'),
		this.VI_select(),
		VI_p('I have a particular interest in software testing and the development of automated testing tools. I am a constant advocate for putting effort into software testing--when I review code, my most frequent question is how they tested it. I enjoy making testing frameworks and environments and making testing easier for others.'),
		VI_p(
			React.createElement('span', null,
				React.createElement('span', null, 'One recent project that I am proud of is a regression testing tool for one of the gateway projects at 42 that has quickly grown popular enough to be used daily on the Fremont, Paris, and Moscow campuses. See '),
				React.createElement('a', {href: 'https://github.com/gavinfielder/pft'}, 'PFT'),
				React.createElement('span', null, ' on my github or in the list below for more.')
			)
		)
	);
	
	var vi_db = React.createElement('div', null,
		VI_h1('SQL and Databases'),
		this.VI_select(),
		VI_p('I frequently use SQL and have incorporated it into many of my projects. I have both formal training in relational database concepts as well as practical experience in implementation and use.'),
		VI_p('I have used Microsoft SQL Server, Oracle, MySQL, and MariaDB within both Windows and Linux environments. I have developed a number of SQL database interfacing applications, some or all of which may be shown in the list below.')
	);
	
	var vi_it = React.createElement('div', null,
		VI_h1('IT Support'),
		this.VI_select(),
		VI_p('I worked in IT Support for two years while at University--I have provided a brief description of my specific experience in my prior IT role in the relevant job entry under \'Positions Held\'. Much of this resume and portfolio is built with software development in mind, but I would be interested in continuing work in IT Support or Analysis because I appreciate the operations perspective of a high-functioning organization and have a personality that can take pride in being integral to success of my extended team. It is also relevant to DevOps work, which I also have a particular interest in.')
	);
	
	var vi_anal = React.createElement('div', null,
		VI_h1('Data Analysis'),
		this.VI_select(),
		VI_p("My background in both applied math and varied experience in programming and scripting languages, as well as databases and database applications, makes me a unique fit for data analysis. While it's not shown explicitly on this resume, I have 3 years of volunteer experience in data analysis through my junior college's Planning, Research, and Institutional Effectiveness committee, which produced reports and interpreted data for actionable key messages to inform college planning decisions. I volunteered for this committee as a student representative because I enjoyed both having a clear picture of the campus environment, because I believed it was too important to ignore, and I also enjoyed getting to work with the data. I made active contributions and was valued as a committee member during my time there."),
		VI_p('I am also highly proficient in Excel and have used a majority of its features, including database integration and VBA scripting. Feel free to test me on any Excel feature.')
	);
	
	
	// -------------------------------------------------------------------------
	//   End Hardcoded data
	// -------------------------------------------------------------------------
	
	constructor(props)
	{
		super(props);
		this.state = {
			intro: this.vi_null
		};
		this.changeIntro = this.changeIntro.bind(this);
		this.OnVariableIntroSelect = this.OnVariableIntroSelect.bind(this);
	}

	changeIntro(elem)
	{
		this.setState({
			intro: elem
		});
	}

	render()
	{
		return React.createElement(
			'div',
			{className: 'variable-intro-section'},
			this.state.intro
		);
	}
}

const elem = document.querySelector('#variable-intro');
ReactDOM.render(React.createElement(VariableIntroSection), elem);
