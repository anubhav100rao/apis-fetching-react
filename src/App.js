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
      fetch(
        "https://api.github.com/users/anubhav100rao/repos?per_page=120"
      ).then((res) => res.json()),
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
        padding: "1rem",
      }}
    >
      {data.map((repo) => {
        return (
          <div
            key={repo.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              backgroundColor: "lightgray",
              width: "50%",
              padding: "1rem",
              margin: "1rem",
              borderRadius: "1rem",
              border: "1px solid black",
            }}
          >
            <h1
              style={{
                padding: "1rem",
                margin: "1rem",
                backgroundColor: "lightblue",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {repo.name}
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "1rem",
                  margin: "1rem",
                  backgroundColor: "lightblue",
                }}
              >
                language {repo.language}
              </div>
              <a
                href={repo.url}
                style={{
                  padding: "0.5rem",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "orange",
                }}
              >
                extra info
              </a>
              <a
                href={repo.html_url}
                style={{
                  padding: "0.5rem",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: "orange",
                }}
              >
                visit repo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
