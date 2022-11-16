/* eslint-disable react/prop-types */
const Mission = ({ mission }) => (
  <tr key={mission.id}>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
  </tr>
);

export default Mission;
