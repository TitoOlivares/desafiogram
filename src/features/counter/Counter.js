import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList())
  }, [dispatch])

  const pokemonList = useSelector(state => state.counter.pokemonList)

  return (
    <div>
      <div className={styles.row}>
        <ul>
          {pokemonList.map((i, x) => (
            <li className={styles.row} key={x}>
              {i.caption}
              <img alt='publish' width={80} height={80} src={`http://localhost:3000${i.url}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
