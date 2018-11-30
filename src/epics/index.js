import { ofType } from 'redux-observable';
import types from '../types'
import actions from '../actions';
import { forkJoin, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

const baseUrl = "https://swapi.co/api/";
const apiCalls = ['people/1/', 'planets/1/', 'starships/10/']

const forkjoinEpic = (action$, store$, deps) => {

    return action$
        .pipe(
            ofType(types.LOAD_DATA),
            switchMap(() => {

                //call apis in parallel
                const parallelObservables = apiCalls
                    .map(api => deps.ajax.getJSON(`${baseUrl}${api}`)
                        .pipe(
                            switchMap(response => of(response)),
                            catchError(err => of(null))
                    ));           

                //forkJoin works like Promise.all()
                return forkJoin(parallelObservables,
                    (jedi, planet, starship) => { //projection
                        return ({
                            jedi,
                            planet,
                            starship
                        })
                    })
                    .pipe(switchMap(response => {
                        const { jedi, planet, starship } = response;
                        console.log("forkJoin complete");
                        return of(actions.setData(jedi, planet, starship));
                    }));

            })
        );
}

export default forkjoinEpic;