var MOCK = [{"id":1,"first_name":"Irene","last_name":"Schmidt","email":"ischmidt0@mozilla.org","country":"Canada","ip_address":"78.246.232.104"},
{"id":2,"first_name":"Ruth","last_name":"Jenkins","email":"rjenkins1@so-net.ne.jp","country":"Russia","ip_address":"94.31.106.164"},
{"id":3,"first_name":"Julie","last_name":"Alvarez","email":"jalvarez2@uiuc.edu","country":"Portugal","ip_address":"182.243.49.141"},
{"id":4,"first_name":"Kenneth","last_name":"Sims","email":"ksims3@nps.gov","country":"Argentina","ip_address":"247.143.96.86"},
{"id":5,"first_name":"Donna","last_name":"Little","email":"dlittle4@free.fr","country":"Poland","ip_address":"174.61.78.247"},
{"id":6,"first_name":"Sarah","last_name":"Simmons","email":"ssimmons5@theguardian.com","country":"Tonga","ip_address":"67.104.208.119"},
{"id":7,"first_name":"Frances","last_name":"Tucker","email":"ftucker6@free.fr","country":"Egypt","ip_address":"245.171.163.191"},
{"id":8,"first_name":"Bonnie","last_name":"Gibson","email":"bgibson7@comsenz.com","country":"France","ip_address":"63.234.179.96"},
{"id":9,"first_name":"Patrick","last_name":"Ward","email":"pward8@dmoz.org","country":"China","ip_address":"164.171.228.247"},
{"id":10,"first_name":"Jean","last_name":"Knight","email":"jknight9@earthlink.net","country":"Indonesia","ip_address":"199.30.50.184"},
{"id":11,"first_name":"Jose","last_name":"Stevens","email":"jstevensa@hostgator.com","country":"China","ip_address":"81.66.88.190"},
{"id":12,"first_name":"Denise","last_name":"Medina","email":"dmedinab@over-blog.com","country":"Philippines","ip_address":"167.5.18.193"},
{"id":13,"first_name":"Victor","last_name":"Hunt","email":"vhuntc@google.co.uk","country":"Russia","ip_address":"94.87.52.83"},
{"id":14,"first_name":"Gloria","last_name":"Fox","email":"gfoxd@about.me","country":"France","ip_address":"83.123.190.249"},
{"id":15,"first_name":"Patricia","last_name":"Andrews","email":"pandrewse@youtu.be","country":"Vietnam","ip_address":"7.126.9.139"},
{"id":16,"first_name":"Judith","last_name":"Wilson","email":"jwilsonf@is.gd","country":"Indonesia","ip_address":"237.147.234.179"},
{"id":17,"first_name":"Brandon","last_name":"Harvey","email":"bharveyg@studiopress.com","country":"China","ip_address":"209.133.18.138"},
{"id":18,"first_name":"Tina","last_name":"Martinez","email":"tmartinezh@marketwatch.com","country":"Russia","ip_address":"98.242.15.125"},
{"id":19,"first_name":"Theresa","last_name":"Castillo","email":"tcastilloi@abc.net.au","country":"Poland","ip_address":"219.100.206.224"},
{"id":20,"first_name":"Jessica","last_name":"Thompson","email":"jthompsonj@unblog.fr","country":"Chile","ip_address":"22.5.202.100"},
{"id":21,"first_name":"Willie","last_name":"Garcia","email":"wgarciak@stumbleupon.com","country":"Indonesia","ip_address":"239.95.47.45"},
{"id":22,"first_name":"Theresa","last_name":"Griffin","email":"tgriffinl@technorati.com","country":"Germany","ip_address":"110.23.96.114"},
{"id":23,"first_name":"Robert","last_name":"Gray","email":"rgraym@github.com","country":"Czech Republic","ip_address":"15.91.110.169"},
{"id":24,"first_name":"Debra","last_name":"Day","email":"ddayn@mlb.com","country":"Russia","ip_address":"241.139.85.127"},
{"id":25,"first_name":"Maria","last_name":"Alvarez","email":"malvarezo@engadget.com","country":"Italy","ip_address":"158.157.120.149"},
{"id":26,"first_name":"Larry","last_name":"Mills","email":"lmillsp@storify.com","country":"Ireland","ip_address":"196.244.57.185"},
{"id":27,"first_name":"Frank","last_name":"Howard","email":"fhowardq@oakley.com","country":"Russia","ip_address":"56.176.242.151"},
{"id":28,"first_name":"Beverly","last_name":"Johnston","email":"bjohnstonr@mysql.com","country":"China","ip_address":"34.181.134.202"},
{"id":29,"first_name":"Craig","last_name":"Grant","email":"cgrants@fda.gov","country":"Greece","ip_address":"213.179.191.147"},
{"id":30,"first_name":"Cheryl","last_name":"Carter","email":"ccartert@goo.ne.jp","country":"Indonesia","ip_address":"120.33.204.164"}];

console.log(MOCK, "base struct");

var simpleMap = MOCK.map(function(human){
  return human.first_name;
});

var simpleFilter = MOCK.filter(function(human){
  return human.country == 'China';
});



// the same ///////////
var combineMapFilter = simpleFilter.map(function(human){
  return human.first_name;
});

function mapper( field_name, human){ return human[field_name] }
var bindComdinedMapper = simpleFilter.map(mapper.bind(null, "first_name"));
// ну и в чем тогда прикол
var bindComdinedMapper2 = simpleFilter.map(mapper);

// the same ///////////


var combined2 = (MOCK.filter(function(human){return human.country == 'Russia';})).map(function(human){return human.id + " " + human.first_name;});


var reduced = MOCK.reduce(function(a, b){
  return a = a + b.country;
});

console.log(reduced);

//////////////////////////////////////////////////////////
var theSet = ["Russia", "China"];

function isInSet(set, human){
  return set.indexOf(human.country) > -1;
}

var bindFilter = MOCK.filter(function(human){
  return isInSet(theSet, human);
});

var bindFilterAdvanced = MOCK.filter(isInSet.bind(null, theSet));
