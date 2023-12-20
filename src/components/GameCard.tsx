import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent='space-between' marginBottom={3}>
          <Link to={'/games/' + game.slug}>
            <Heading fontSize='1xl'>{game.name}</Heading>
          </Link>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
