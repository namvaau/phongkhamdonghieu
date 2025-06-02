import React, { useEffect, useState, useRef, FormEvent } from "react";
import "../../assets/css/styleAI.css"
import user from "../../assets/img/user.png"
import pk from "../../assets/img/logo.png"

const API_KEY = "AIzaSyBfftg-kXWSu46jzQtc-n4mO--z8j0sYbY";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

interface Message {
    id: number;
    type: "outgoing" | "incoming" | "incoming-loading" | "error";
    content: string;
}

export default function GeminiChatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userMessage, setUserMessage] = useState("");
    const [isResponseGenerating, setIsResponseGenerating] = useState(false);
    const [themeLight, setThemeLight] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const messageIdRef = useRef(0);

    // Load from localStorage on mount
    useEffect(() => {
        const savedChats = localStorage.getItem("saved-chats");
        const savedTheme = localStorage.getItem("themeColor") === "light_mode";

        setThemeLight(savedTheme);

        if (savedChats) {
            try {
                const parsed: Message[] = JSON.parse(savedChats);
                setMessages(parsed);
            } catch {
                setMessages([]);
            }
        }
    }, []);

    // Save messages and theme to localStorage when changed
    useEffect(() => {
        localStorage.setItem("saved-chats", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        localStorage.setItem("themeColor", themeLight ? "light_mode" : "dark_mode");
    }, [themeLight]);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);
        }
    }, [messages]);

    // Helper: add message
    const addMessage = (msg: Omit<Message, "id">) => {
        const id = messageIdRef.current++;
        setMessages((prev) => [...prev, { id, ...msg }]);
        return id;
    };

    // Typing effect for incoming message
    const showTypingEffect = (fullText: string, messageId: number) => {
        const words = fullText.split(" ");
        let currentWordIndex = 0;

        setIsResponseGenerating(true);

        const intervalId = setInterval(() => {
            currentWordIndex++;
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === messageId
                        ? {
                            ...msg,
                            content: words.slice(0, currentWordIndex).join(" "),
                            type: "incoming",
                        }
                        : msg
                )
            );

            if (currentWordIndex === words.length) {
                clearInterval(intervalId);
                setIsResponseGenerating(false);
            }
        }, 75);
    };

    // Generate response from API
    const generateAPIResponse = async (incomingMessageId: number) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: userMessage }],
                        },
                    ],
                }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error?.message || "Unknown error");

            const apiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text.replace(/\*\*(.*?)\*\*/g, "$1") || "";

            showTypingEffect(apiResponse, incomingMessageId);
        } catch (error: unknown) {
            setIsResponseGenerating(false);
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : typeof error === "string"
                        ? error
                        : "An unknown error occurred";
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === incomingMessageId ? { ...msg, content: errorMessage, type: "error" } : msg
                )
            );
        }
    };

    // Handle user submit message
    const handleOutgoingChat = () => {
        if (!userMessage.trim() || isResponseGenerating) return;

        const trimmedMessage = userMessage.trim();

        // Add outgoing message
        addMessage({ type: "outgoing", content: trimmedMessage });

        setUserMessage("");
        setThemeLight((prev) => prev); // to trigger re-render if needed

        // Add incoming loading message placeholder
        const incomingLoadingId = addMessage({ type: "incoming-loading", content: "" });

        generateAPIResponse(incomingLoadingId);
    };

    // Theme toggle handler
    const toggleTheme = () => {
        setThemeLight((prev) => !prev);
    };

    // Delete all chats
    const deleteChats = () => {
        if (window.confirm("Are you sure you want to delete all the chats?")) {
            setMessages([]);
            localStorage.removeItem("saved-chats");
            setThemeLight(false);
        }
    };

    // Copy message content
    const copyMessage = (text: string, setCopied: (v: boolean) => void) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    // Suggestions from original HTML
    const suggestions = [
        "Chế độ ăn uống nào giúp tăng cường hệ miễn dịch hiệu quả?",
        "Các dấu hiệu sớm của tiểu đường là gì và khi nào nên đi khám bác sĩ?",
        "Làm thế nào để giảm căng thẳng và lo âu trong cuộc sống hàng ngày?",
        "Các biện pháp phòng ngừa nào có thể giúp ngăn ngừa bệnh tim mạch?",
    ];

    // Message component
    const MessageItem: React.FC<{ msg: Message }> = ({ msg }) => {
        const [copied, setCopied] = useState(false);

        const avatarSrc =
            msg.type === "outgoing" ? `${user}` : `${pk}`;
        return (
            <div className={`message ${msg.type === "incoming-loading" ? "incoming loading" : msg.type}`}>
                <div className={`message ${msg.type}`}>
                    <div className={`message-content ${msg.type}`}>
                        {(msg.type === "incoming" || msg.type === "incoming-loading") && (
                            <img className="avatar" src={avatarSrc} alt="incoming avatar" />
                        )}

                        <p className="text">{msg.content}</p>

                        {msg.type === "outgoing" && (
                            <img className="avatar" src={avatarSrc} alt="outgoing avatar" />
                        )}

                        {msg.type === "incoming-loading" && (
                            <div className="loading-indicator">
                                <div className="loading-bar"></div>
                                <div className="loading-bar"></div>
                                <div className="loading-bar"></div>
                            </div>
                        )}
                    </div>
                </div>

                {msg.type !== "incoming-loading" && msg.type === "incoming" && (
                    <span
                        onClick={() => copyMessage(msg.content, setCopied)}
                        className="icon material-symbols-rounded"
                        style={{ cursor: "pointer" }}
                    >
                        {copied ? "done" : "content_copy"}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div className={themeLight ? "light_mode" : ""}>
            {(messages.length === 0) && (
                <header className={`header-ai ${messages.length > 0 ? "hide-header" : ""}`}>
                    <h1 className="title">Phòng khám Đa khoa Đông Hiếu, <br />Xin chào!</h1>
                    <p className="subtitle">Chúng tôi có thể giúp gì cho bạn?</p>

                    <ul className="suggestion-list">
                        {suggestions.map((text, i) => (
                            <li
                                key={i}
                                className="suggestion"
                                onClick={() => {
                                    if (isResponseGenerating) return;
                                    setUserMessage(text);
                                    setTimeout(() => {
                                        handleOutgoingChat();
                                    }, 50);
                                }}
                                style={{ cursor: isResponseGenerating ? "not-allowed" : "pointer" }}
                            >
                                <h6 className="text">{text}</h6>
                                <span className="icon material-symbols-rounded">
                                    {i === 0
                                        ? "draw"
                                        : i === 1
                                            ? "lightbulb"
                                            : i === 2
                                                ? "explore"
                                                : "code"}
                                </span>
                            </li>
                        ))}
                    </ul>
                </header>)}

            <div ref={chatContainerRef} className="chat-list">
                {messages.map((msg) => (
                    <MessageItem key={msg.id} msg={msg} />
                ))}
            </div>

            <div className="typing-area">
                <form
                    className="typing-form"
                    onSubmit={(e: FormEvent) => {
                        e.preventDefault();
                        handleOutgoingChat();
                    }}
                >
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Nhập câu hỏi của bạn..."
                            className="typing-input"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            required
                            disabled={isResponseGenerating}
                            autoFocus
                        />
                        <button
                            id="send-message-button"
                            className="icon material-symbols-rounded"
                            type="submit"
                            disabled={isResponseGenerating}
                        >
                            send
                        </button>
                    </div>
                    <div className="action-buttons">
                        <span
                            id="theme-toggle-button"
                            className="icon material-symbols-rounded"
                            onClick={toggleTheme}
                            style={{ cursor: "pointer" }}
                            title="Toggle theme"
                        >
                            {themeLight ? "dark_mode" : "light_mode"}
                        </span>
                        <span
                            id="delete-chat-button"
                            className="icon material-symbols-rounded"
                            onClick={deleteChats}
                            style={{ cursor: "pointer" }}
                            title="Xóa tất cả cuộc trò chuyện"
                        >
                            delete
                        </span>
                    </div>
                </form>
                <p className="disclaimer-text">
                    Lưu ý: Trợ lý AI không thay thế cho tư vấn y tế chuyên nghiệp. Vui lòng tham khảo ý kiến bác sĩ hoặc chuyên gia y tế nếu bạn có bất kỳ câu hỏi nào về tình trạng sức khỏe của mình.
                </p>
            </div>
        </div>
    );
}
