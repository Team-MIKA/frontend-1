import { Injectable } from "@angular/core";
import { Share } from "../../../generated/api/models/share";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class EastereggService {
  hashmap1: Set<string> = new Set<string>();
  flag: boolean = false;
  hashmap2: Set<string> = new Set<string>();
  public subject1: Subject<void> = new Subject<void>();
  doStuff(shareId: string, i: Share[]) {
    this.hashmap2.add(shareId);
    i.forEach((o) => this.hashmap1.add(<string>o.id));
    let p = this.hashmap2.size === this.hashmap1.size;
    let g = [...this.hashmap2];
    let a = g.every((s) => {
      return this.hashmap1.has(s);
    });
    if (p && a) {
      let f = !this.flag;
      if (f) {
        this.subject1.next();
        this.d();
      }
    }
  }
  d() {
    this.flag = true;
  }
}
