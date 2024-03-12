import { Button, Paper, Title, Text } from "@mantine/core";
import classes from './CardOnlyImg.module.css';

interface CardOnlyImgProps {
    image: string;
    title: string;
    category: string;
}

export function CardOnlyImg({ image, title, category }: CardOnlyImgProps){
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${image})` }}
            className={classes.card}
            >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                {title}
                </Title>
            </div>
            <Button variant="filled" color="violet">
                Read more...
            </Button>
        </Paper>
    )
}