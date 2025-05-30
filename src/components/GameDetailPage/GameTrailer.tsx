import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const dataResults = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return dataResults ? (
    <video
      src={dataResults?.data[480]}
      poster={dataResults?.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
