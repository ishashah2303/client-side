import {
    Card,
    Spacer,
    Button,
    Input,
    Textarea,
    RadioGroup,
    Radio,
} from '@nextui-org/react';

export default function Register() {
    return (
        <div>
            <section className="flex items-center justify-center min-h-screen min-w-screen p-20">
                <Card className="max-w-lg p-10" fullWidth={true}>
                    <h4 className="text-2xl font-bold mb-6">
                        Teacher Registration
                    </h4>
                    <Input
                        fullWidth
                        isRequired
                        type="text"
                        label="Name"
                        placeholder="Enter your full name"
                        className="mb-4"
                    />
                    <Input
                        fullWidth
                        isRequired
                        type="text"
                        label="Qualification"
                        placeholder="Enter your qualification"
                        className="mb-4"
                    />
                    <Input
                        fullWidth
                        isRequired
                        type="text"
                        label="College Name"
                        placeholder="Enter your college name"
                        className="mb-4"
                    />
                    <Textarea
                        isRequired
                        label="Subjects"
                        placeholder="Enter subjects (comma separated)"
                        className="mb-4"
                    />
                    <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Gender</p>
                        <RadioGroup orientation="horizontal">
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                            <Radio value="other">Other</Radio>
                        </RadioGroup>
                    </div>
                    <Input
                        fullWidth
                        isRequired
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        className="mb-4"
                    />
                    <Input
                        fullWidth
                        isRequired
                        type="tel"
                        label="Mobile"
                        placeholder="Enter your mobile number"
                        className="mb-4"
                    />
                    <Input
                        fullWidth
                        isRequired
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        className="mb-4"
                    />
                    <Input
                        fullWidth
                        isRequired
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        className="mb-4"
                    />
                    <Spacer y={1} />
                    <Button color='primary'>Register</Button>
                </Card>
            </section>
        </div>
    );
}
