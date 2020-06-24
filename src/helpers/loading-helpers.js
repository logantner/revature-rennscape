import axios from "axios";

export async function getCharacters(props) {
    return loadData(
        axios.get("/user/character"),
        (response) => {
            props.loadUserCharacters(response.data);
        }
    );
}

export async function getUsers(props) {
    return loadData(
        axios.get("/user"),
        (response) => {
            props.loadUsers(response.data);
        }
    );
}

export async function getUserInfo(props) {
    return loadData(
        axios.get("/auth/status"),
        (response) => {
            if (response.data && response.data.username){
                props.updateUserInfo({
                    loggedIn: true,
                    username: response.data.username,
                    role: response.data.password
                });
            } else {
                props.updateUserInfo({loggedIn: false});
            }
        }
    );
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

async function loadData(request, process) {
    let status;
    try {
        const response = await request;
        process(response);
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