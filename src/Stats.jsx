import React from 'react'

const Stats = ({stats, abilities}) => {
  return (
    <div className="details">
      <div className="abilities">
        {abilities && abilities.length > 0 ? (
          <p><b>Abilities:</b> {abilities}</p>
        ) : (
          <p><b>Abilities:</b> None</p>
        )}
      </div>
      <div className="stats">
        {stats && stats.length > 0 ? (
          stats.map((statObj, index) => (
            <p key={index}>
              {statObj.stat.name.toUpperCase()}:{" "}
              <progress value={statObj.base_stat} max="100"></progress> {statObj.base_stat}
            </p>
          ))
        ) : (
          <p>No stats available.</p>
        )}
      </div>
    </div>
  )
}

export default Stats