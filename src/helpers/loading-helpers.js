import axios from "axios";

export async function getCharacters(props) {
    let status;
    try {
        const response = await axios.get("/user/character");
        props.loadUserCharacters(response.data);
        status = 200;
    } catch (err) {
        console.error(err);
            if (err.response) {
                status = 400;
            }
            status = 500;
    } finally {
        return status;
    }
}

export async function getRankings(props) {
    let status;
    try {
        let response = await axios.get("/user/character/total");
        props.loadRanksTotal(response.data);

        response = await axios.get("/user/character/attack");
        props.loadRanksAttack(response.data);

        response = await axios.get("/user/character/strength");
        props.loadRanksStrength(response.data);

        response = await axios.get("/user/character/defence");
        props.loadRanksDefence(response.data);

        status = 200;
    } catch (err) {
        console.error(err);
            if (err.response) {
                status = 400;
            }
            status = 500;
    } finally {
        return status;
    }
}

export async function getUsers(props) {
    let status;
    try {
        const response = await axios.get("/user");
        props.loadUsers(response.data);
        status = 200;
    } catch (err) {
        console.error(err);
            if (err.response) {
                status = 400;
            }
            status = 500;
    } finally {
        return status;
    }
}

export async function getUserInfo(props) {
    let status;
    try {
        const response = await axios.get("/auth/status");
        props.loadUserInfo({
            username: response.data.username,
            role: response.data.password
        });
        status = 200;
    } catch (err) {
        console.error(err);
            if (err.response) {
                status = 400;
            }
            status = 500;
    } finally {
        return status;
    }
}