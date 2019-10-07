import React from "react";

import Bitcoin from "./Bitcoin";
import SanGraph from "./SanGraph";
import SanIcon from "./SanIcon";



const Icon = props => {
	switch (props.name) {
		case "bitcoin":
			return <Bitcoin {...props} />;
		case "sangraph":
			return <SanGraph {...props} />;
		case "sanicon":
			return <SanIcon {...props} />;
		default:
			return;
	}
};

export default Icon;
