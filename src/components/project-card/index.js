import { useContext } from 'react';
import { nanoid } from 'nanoid';

import { StoreContext } from '../../contexts';
import { ACTIONS, TAG_COLORS } from '../../constants';
import { Tag } from '..';
import './style.scss';

const ProjectCard = ({ project }) => {
  const { dispatch } = useContext(StoreContext);

  const tags = project.tags.split(',').map(tag => {
    return (
      <Tag key={nanoid()} color={TAG_COLORS[tag]}>
        {tag}
      </Tag>
    );
  });

  return (
    <div
      className='projectCard'
      onClick={e => {
        dispatch({ type: ACTIONS.SELECT_PROJECT, payload: project });
        console.log(e);
      }}
    >
      <div className='card__left'>
        <div
          className='cardImage'
          style={{
            backgroundImage: `url(${project.preview ? project.preview : ''})`,
          }}
        ></div>
      </div>

      <div className='card__right'>
        <div>
          <div className='cardTitleLink'>
            <h5 className='cardTitle'>{project.title}</h5>
          </div>
          <div className='cardSummary'>
            {' '}
            <p>{project.summary}</p>{' '}
          </div>
          <div className='cardTags'>{tags}</div>
        </div>
        <div className='metadata'>
          <div className='metadata__icons'>
            {project.githubLink.length === 0 && <i className='lock icon'></i>}
            <i
              className={`${project.isTeamProject ? 'users' : 'user'} icon`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
