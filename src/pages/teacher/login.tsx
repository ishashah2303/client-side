import {
    Card,
    Spacer,
    Button,
    Input,
} from '@nextui-org/react';

export default function Login() {
    return (
        <div>
            <section className="flex items-center justify-center min-h-screen min-w-screen">
                <Card className="max-w-lg p-10" fullWidth={true}>
                    <h4 className="text-2xl font-bold mb-6">
                        Teacher Login
                    </h4>
                    <Input
                        fullWidth
                        size="lg"
                        placeholder="Email"
                    />
                    <Spacer y={5} />
                    <Input
                        fullWidth
                        size="lg"
                        placeholder="Password"
                    />
                    <Spacer y={5} />
                    <Button color='primary'>Sign in</Button>
                </Card>
            </section>
        </div>
    );
}
