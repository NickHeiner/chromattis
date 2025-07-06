import '../styles/Achievements.css';
import { achievementsButtonClicked } from '../events';
import type { ApplicationState } from '../types';

export const AchievementNotification = ({state}: { state: ApplicationState }) => {
  return(
    <div id='AchievementNotification' className='hide' onClick={achievementsButtonClicked}>
      <strong>Achievement Unlocked</strong>
      <p>{state.achievement_text}</p>
    </div>
  );
}

export default AchievementNotification;
