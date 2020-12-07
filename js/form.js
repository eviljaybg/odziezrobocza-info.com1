// JavaScript Document
function formreset(){
document.searchform.reset();
}
       function setOptions(chosen) {
var selbox = document.searchform.typ;
selbox.options.length = 0;

if (chosen == "odziezrobocza") {  selbox.options[selbox.options.length] = new Option('Wszystkie','wszystkie');
  selbox.options[selbox.options.length] = new Option('Kombinezony','kombinezony');
  selbox.options[selbox.options.length] = new Option('Bluzy','bluzy');
   selbox.options[selbox.options.length] = new Option('Spodnie','spodnie');
     selbox.options[selbox.options.length] = new Option('Akcesoria','akcesoria');
	   selbox.options[selbox.options.length] = new Option('Odzież funkcjonalna','odziezfunkcjonalna');
	     selbox.options[selbox.options.length] = new Option('Bielizna','onetwo');
		   selbox.options[selbox.options.length] = new Option('Kamizelki','onetwo');
		     selbox.options[selbox.options.length] = new Option('Kurtki','onetwo');
			   selbox.options[selbox.options.length] = new Option('Polary','onetwo');
			     selbox.options[selbox.options.length] = new Option('T-shirty','onetwo');
				   selbox.options[selbox.options.length] = new Option('Polo koszulki','onetwo');
				     selbox.options[selbox.options.length] = new Option('Koszule','onetwo');
					  selbox.options[selbox.options.length] = new Option('Przeciw deszczowa','onetwo');
					   selbox.options[selbox.options.length] = new Option('Ostrzegawcza, odblaskowa','onetwo');
					    selbox.options[selbox.options.length] = new Option('Czapki','onetwo');
}
if (chosen == "odziezdlagastronomi") {
selbox.options[selbox.options.length] = new Option('Wszystkie','wszystkie');
  selbox.options[selbox.options.length] = new Option('Zapaski kelnerskie','zapaskikelnerskie');
  selbox.options[selbox.options.length] = new Option('Spodnie kucharskie','spodniekucharskie');
    selbox.options[selbox.options.length] = new Option('Kurtka kucharska','kutrkakucharska');
	  selbox.options[selbox.options.length] = new Option('Akcesoria','akcesoria');
	    selbox.options[selbox.options.length] = new Option('Spodnie','spodnie');
		  selbox.options[selbox.options.length] = new Option('Czapki','czapki');
}
if (chosen == "miejscepracy") {selbox.options[selbox.options.length] = new Option('Wszystkie','wszystkie');
  selbox.options[selbox.options.length] = new Option('Transport, serwis, usługi','transportserwisuslugi');
  selbox.options[selbox.options.length] = new Option('Budowa, instalacje','budowainstalacje');
    selbox.options[selbox.options.length] = new Option('Odzież ochronna, ostrzegawcza, odblaskowa','odziezochronna');
	  selbox.options[selbox.options.length] = new Option('Odzież dla gastronomi','odziezdlagastronomi');
	    selbox.options[selbox.options.length] = new Option('Odzież funkcjonalna','odziezfunkcjonalna');
		  selbox.options[selbox.options.length] = new Option('Odzież profilowana, promocyjna','odziezprofilowanapromocyjna');
		  		  selbox.options[selbox.options.length] = new Option('Akcesoria','akcesoria');
				  		  selbox.options[selbox.options.length] = new Option('Malarze, wykończenia wnętrz','malarzewykonczeniawnetrz');
						  		  selbox.options[selbox.options.length] = new Option('Prace spawalnicze, mechanicy','pracespawalnicze');
}
if (chosen == "wybierz") {selbox.options[selbox.options.length] = new Option('wybierz kategorię','wybkat');}

}     
