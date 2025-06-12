import axios from "axios";
import { User } from "@/types";


export async function fetchRandomUser(): Promise<User> {
	const response = await axios.get("https://randomuser.me/api/?results=1&nat=us");
	const user= response?.data?.results?.[0];
	
	if (!user) {
		throw new Error("No user data found.");
	} else {
		return user
	}
}
