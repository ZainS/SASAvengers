import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Avenger } from './avenger';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvengerService {

  private avengerURL = 'api/avengers'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) {}

  getList(): Observable<Avenger[]> {
    return this.http.get<Avenger[]>(this.avengerURL)
  }

  create(avenger: Avenger): Observable<Avenger> {
    // add code to create
    return this.http.post<Avenger>(this.avengerURL, avenger, this.httpOptions);
  }

  delete(avenger: Avenger | number): Observable<Avenger>{
    // add code to delete
    const id = typeof avenger === 'number' ? avenger : avenger.id;
    const url = `${this.avengerURL}/${id}`;
    console.log(url)
    return this.http.delete<Avenger>(url, this.httpOptions);
  }

  edit(avenger:Avenger) {
    // add code to create
    return this.http.put(this.avengerURL, avenger, this.httpOptions)
  }

  // url: string;
  // name: string;
  // appearances: number;
  // current: string;
  // gender: string;
  // year: number;
  // yearsSinceJoining: number;
  // honorary: string;
  // notes: string;
  
  // private data: Avenger[] = [
  // {
  //   "url": "http://marvel.wikia.com/Henry_Pym_(Earth-616)",
  //   "name": "Henry Jonathan \"Hank\" Pym",
  //   "appearances": 1269,
  //   "current": "YES",
  //   "gender": "MALE",
  //   "year": 1963,
  //   "yearsSinceJoining": 52,
  //   "honorary": "Full",
  //   "notes": "Merged with Ultron in Rage of Ultron Vol. 1. A funeral was held. "
  // },
  // {
  //  "url": "http://marvel.wikia.com/Janet_van_Dyne_(Earth-616)",
  //  "name": "Janet van Dyne",
  //  "appearances": 1165,
  //  "current": "YES",
  //  "gender": "FEMALE",
  //  "year": 1963,
  //  "yearsSinceJoining": 52,
  //  "honorary": "Full",
  //  "notes": "Dies in Secret Invasion V1:I8. Actually was sent tto Microverse recovered"
  // },
  // {
  //  "url": "http://marvel.wikia.com/Anthony_Stark_(Earth-616)",
  //  "name": "Anthony Edward \"Tony\" Stark",
  //  "appearances": 3068,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1963,
  //  "yearsSinceJoining": 52,
  //  "honorary": "Full",
  //  "notes": "Death: \"Later while under the influence of Immortus Stark committed a number of horrible acts and was killed.'  This set up young Tony. Franklin Richards later brought him back"
  // },
  // {
  //  "url": "http://marvel.wikia.com/Robert_Bruce_Banner_(Earth-616)",
  //  "name": "Robert Bruce Banner",
  //  "appearances": 2089,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1963,
  //  "yearsSinceJoining": 52,
  //  "honorary": "Full",
  //  "notes": "Dies in Ghosts of the Future arc. However \"he had actually used a hidden Pantheon base to survive\""
  // },
  // {
  //  "url": "http://marvel.wikia.com/Thor_Odinson_(Earth-616)",
  //  "name": "Thor Odinson",
  //  "appearances": 2402,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1963,
  //  "yearsSinceJoining": 52,
  //  "honorary": "Full",
  //  "notes": "Dies in Fear Itself brought back because that's kind of the whole point. Second death in Time Runs Out has not yet returned"
  // },
  // {
  //  "url": "http://marvel.wikia.com/Richard_Jones_(Earth-616)",
  //  "name": "Richard Milhouse Jones",
  //  "appearances": 612,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1963,
  //  "yearsSinceJoining": 52,
  //  "honorary": "Honorary",
  //  "notes": "NA"
  // },
  // {
  //  "url": "http://marvel.wikia.com/Steven_Rogers_(Earth-616)",
  //  "name": "Steven Rogers",
  //  "appearances": 3458,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1964,
  //  "yearsSinceJoining": 51,
  //  "honorary": "Full",
  //  "notes": "Dies at the end of Civil War. Later comes back. "
  // },
  // {
  //  "url": "http://marvel.wikia.com/Clint_Barton_(Earth-616)",
  //  "name": "Clinton Francis Barton",
  //  "appearances": 1456,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1965,
  //  "yearsSinceJoining": 50,
  //  "honorary": "Full",
  //  "notes": "Dies in exploding Kree ship in Averngers Vol. 1  Issue 502. Brought back by Scarlet Witch. Dies again in House of M Vol 1 Issue 7. Is later brought back. "
  // },
  // {
  //  "url": "http://marvel.wikia.com/Pietro_Maximoff_(Earth-616)",
  //  "name": "Pietro Maximoff",
  //  "appearances": 769,
  //  "current": "YES",
  //  "gender": "MALE",
  //  "year": 1965,
  //  "yearsSinceJoining": 50,
  //  "honorary": "Full",
  //  "notes": "Dies in House of M Vol 1 Issue 7. Later comes back"
  // },
  // {
  //  "url": "http://marvel.wikia.com/Wanda_Maximoff_(Earth-616)",
  //  "name": "Wanda Maximoff",
  //  "appearances": 1214,
  //  "current": "YES",
  //  "gender": "FEMALE",
  //  "year": 1965,
  //  "yearsSinceJoining": 50,
  //  "honorary": "Full",
  //  "notes": "Dies in Uncanny_Avengers_Vol_1_14. Later comes back"
  // }];

}