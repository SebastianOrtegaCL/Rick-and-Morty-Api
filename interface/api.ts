interface Response {
    results: Result[]
}

interface Result {
    id: number;
    name: string;
    image: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
}
