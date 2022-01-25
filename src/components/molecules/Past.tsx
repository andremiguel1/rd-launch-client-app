import axios from 'axios';
import React, { useEffect, useState } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import LaunchTable from "../atoms/LaunchTable";

const API_PAST_LAUNCH = 'https://rockt-launch-service.herokuapp.com/past';

const Past: React.FC = () =>
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
      <LaunchTable title="Past Launches" launches={launches}></LaunchTable>
    </React.Fragment>
  );
}
export default Past;
