import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 200;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '....';

  return (
    <Text>
      {summary}
      <Button marginLeft={2} size='xs' fontWeight='bold' colorScheme='red' onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
