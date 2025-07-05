import { Tile } from './Tile';
import type { Level, Tile as TileType } from '../types';
import '../styles/Game.css';

export const Game = ({tiles, current_level, game_in_progress, show_game,  hide_numbers, hide_colors, hide_tooltips}: {
  tiles: TileType[];
  current_level: Level;
  game_in_progress: boolean;
  show_game: boolean;
  hide_numbers: boolean;
  hide_colors: boolean;
  hide_tooltips: boolean;
}) => {
  tiles = tiles.map((tile, index) => 
    <Tile 
      index={index}
      key={tile.id} 
      tile={tile} 
      currently_selected={current_level.currently_selected === tile.id}
      preview_mode={current_level.currently_selected !== null}
      game_in_progress={game_in_progress} 
      hide_numbers={hide_numbers} 
      hide_colors={hide_colors}
      hide_tooltips={hide_tooltips}
    />);
  const columns = tiles.length / Math.floor(Math.sqrt(tiles.length));
  const rows = Math.floor(Math.sqrt(tiles.length));

  return(
    <div className={`Game ${game_in_progress ? 'unsolved' : 'solved'} ${show_game ? 'show' : 'hide'}`}
         style={{
            gridTemplateColumns: `repeat(${ columns }, calc((var(--content-width) - (var(--content-gap) * 3)) / ${columns} - var(--content-gap)))`,
            gridTemplateRows: `repeat(${ rows }, calc((var(--content-width) - (var(--content-gap) * 3)) / ${columns} - var(--content-gap))`,
            gridGap: 'var(--content-gap)' }} >
      { tiles }
    </div>
  );
}

export default Game;
