import { describe, it, expect } from "vitest";
import { toyotaFitment } from "./toyota";
import { li_autoFitment } from "./li-auto";
import { hongqiFitment } from "./hongqi";
import { ledaoFitment } from "./ledao";
import { xpengFitment } from "./xpeng";
import { xiangjieFitment } from "./xiangjie";
import { havalFitment } from "./haval";
import { volkswagenFitment } from "./volkswagen";
import { bmwFitment } from "./bmw";
import { shangjieFitment } from "./shangjie";
import { voyahFitment } from "./voyah";
import { haoboFitment } from "./haobo";
import { land_roverFitment } from "./land-rover";
import { teslaFitment } from "./tesla";
import { chevroletFitment } from "./chevrolet";
import { gacFitment } from "./gac";

describe("fitment generated data", () => {
  it("all 16 new brands load with runtime assertions passing", () => {
    for (const f of [toyotaFitment, li_autoFitment, hongqiFitment, ledaoFitment, xpengFitment, xiangjieFitment, havalFitment, volkswagenFitment, bmwFitment, shangjieFitment, voyahFitment, haoboFitment, land_roverFitment, teslaFitment, chevroletFitment, gacFitment]) {
      expect(f.models.length).toBeGreaterThan(0);
    }
  });
});
