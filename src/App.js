import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/users/anubhav100rao/repos").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        backgroundColor: "lightgray",
        padding: "1rem",
      }}
    >
      {data.map((repo) => {
        return (
          <div key={repo.id}>
            <h1>{repo.name}</h1> <span>{repo.language}</span>
            <p>{repo.description}</p>
            <strong>👀 {repo.subscribers_count}</strong>{" "}
            <strong>✨ {repo.stargazers_count}</strong>{" "}
            <strong>🍴 {repo.forks_count}</strong>
          </div>
        );
      })}
    </div>
  );
}
