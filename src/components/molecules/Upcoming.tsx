import axios from 'axios';
import React, { useEffect, useState } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import LaunchTable from "../atoms/LaunchTable";

const API_PAST_LAUNCH = 'https://rockt-launch-service.herokuapp.com/upcoming';

const Upcoming: React.FC = () =>
{

  const [launches, setLaunch] = useState([] as Array<LaunchModel>);

  useEffect(() =>
  { 
    const loadLatestLaunch = async() =>
    {
      const response = await axios.get(API_PAST_LAUNCH);
      const { data } = response;
      setLaunch(data as Array<LaunchModel>);
    }
    loadLatestLaunch();
  }, [launches]);
  

  return (
    <React.Fragment>
      <LaunchTable title="Upcoming Launches" launches={launches}></LaunchTable>
    </React.Fragment>
  );
}
export default Upcoming;
