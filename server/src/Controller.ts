import { Alerts } from "./Model";
/* import { } from "jquery"; */

import * as $ from "jquery";

const m = new Alerts();
/*const sjOb; 
m.Alerts = ['Great new feature'];*/

m.Messages = ['Great new feature'];

/* sjOb.Alerts = ['Great new feature']; */

export function DisplayAlerts(){
    $("#alerts").append(m.Messages.join());

}

DisplayAlerts();