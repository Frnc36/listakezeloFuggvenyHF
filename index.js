import { ALLATLISTA } from "./adat.js";

import { kartyakMegjelenit } from "./kartyak.js";
kartyakMegjelenit(ALLATLISTA);

import { atlagEletkor, atlagEletkorMegjelenit } from "./atlageletkor.js";
let atlageletkor = atlagEletkor(ALLATLISTA);
atlagEletkorMegjelenit(atlageletkor);

import { rendezes, szuresek } from "./szures_rendezes.js";
szuresek(ALLATLISTA)
rendezes(ALLATLISTA);
