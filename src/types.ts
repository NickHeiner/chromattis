export type ColorID = 0 | 1 | 2 | 3 | 4 | 5;

export interface Tile {
  id: number;
  target_tiles: number[];
  current_color: ColorID;
  will_change: boolean;
  preview: boolean;
}

export interface Level {
  board: Tile[];
  id: string;
  moves: number;
  best_score: number | 'N/A';
  currently_selected: number | null;
  last_move: { tile: Tile; reverse: boolean } | null;
  in_winning_state(): boolean;
}

export interface Game {
  levels: Level[];
  current_level_index: number;
  current_level(): Level;
  highest_unlocked_level(): number;
}

export interface TutorialLevel {
  text: string;
  image: string;
}

export interface Tutorial {
  levels: TutorialLevel[];
  current_level_index: number;
}

export interface Achievement {
  id: string;
  text: string;
  // eslint-disable-next-line no-unused-vars
  condition: (_s: ApplicationState) => boolean;
}

export interface ApplicationState {
  current_display: string;
  show_level_nav: boolean;
  level_nav_page: number;
  mute_audio: boolean;
  mute_music: boolean;
  hide_numbers: boolean;
  hide_colors: boolean;
  hide_tooltips: boolean;
  last_action: string | null;
  music_enabled_once: boolean;
  show_achievement_notification: boolean;
  achievement_text: string | null;
  touch_action: boolean | null;
  completed_achievements: () => Achievement[];
  game: Game;
  tutorial: Tutorial;
  achievements: Achievement[];
}
