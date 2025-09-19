import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Clock, CheckCircle } from "lucide-react";

interface EmailConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function EmailConfirmationModal({
  isOpen,
  onClose,
  email,
}: EmailConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader className="text-center space-y-6 pb-6">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
            <Mail className="w-8 h-8 text-gray-700" />
          </div>

          {/* Title */}
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Check Your Email
          </DialogTitle>

          {/* Description */}
          <DialogDescription className="text-base text-gray-600 space-y-4">
            <p>
              We've sent a confirmation email to{" "}
              <span className="font-semibold text-gray-900">{email}</span>
            </p>
          </DialogDescription>
        </DialogHeader>

        {/* Content */}
        <div className="space-y-6">
          {/* Time-sensitive notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">
                Time-Sensitive Offer
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Your early access pricing is reserved for the next{" "}
              <span className="font-semibold text-gray-900">15 minutes</span>.
              After that, you'll join the regular waitlist at standard pricing.
            </p>
          </div>

          {/* What you're securing */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  What You're Securing:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    •{" "}
                    <span className="font-semibold text-gray-900">40% off</span>{" "}
                    launch pricing ($29/mo instead of $49/mo)
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold text-gray-900">
                      Priority access
                    </span>{" "}
                    when we launch
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold text-gray-900">
                      Exclusive features
                    </span>{" "}
                    for early adopters
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold text-gray-900">
                      Direct line
                    </span>{" "}
                    to our founding team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next steps */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Next Steps:</h4>
            <ol className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                  1
                </span>
                Check your inbox (and spam folder)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                  2
                </span>
                Click the confirmation link
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-xs font-semibold text-white">
                  3
                </span>
                Your special pricing is locked in!
              </li>
            </ol>
          </div>

          {/* Actions */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Didn't receive the email? Check your spam folder or{" "}
              <button className="text-blue-600 hover:text-blue-700 font-medium underline">
                resend confirmation
              </button>
            </p>

            <Button
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3"
            >
              Got It - Checking My Email Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
